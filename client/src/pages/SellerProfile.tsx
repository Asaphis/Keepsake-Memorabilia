import { Navbar } from "@/components/layout/Navbar";
import { mockSellers, mockStories, mockSellerPosts, Story, SellerPost } from "@/lib/mockData";
import { useRoute, useLocation } from "wouter";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardStack } from "@/components/ui/CardStack";
import { Star, MapPin, Share2, ArrowLeft, Plus, Heart, MessageCircle, X, Image, FileText, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface StoryCircleProps {
  story: Story;
  onClick: () => void;
}

function StoryCircle({ story, onClick }: StoryCircleProps) {
  const getIcon = () => {
    switch (story.type) {
      case 'image':
        return <Image size={16} />;
      case 'text':
        return <FileText size={16} />;
      case 'update':
        return <Bell size={16} />;
    }
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-2 min-w-[70px]"
    >
      <div className={`relative p-[3px] rounded-full ${story.viewed ? 'bg-gray-600' : 'bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500'}`}>
        <div className="w-16 h-16 rounded-full bg-[#22252b] flex items-center justify-center overflow-hidden">
          {story.image ? (
            <img src={story.image} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="text-gray-400">
              {getIcon()}
            </div>
          )}
        </div>
        {!story.viewed && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-[#181A1E]" />
        )}
      </div>
      <span className="text-[10px] text-gray-400 truncate max-w-[60px]">
        {story.type === 'image' ? 'Photo' : story.type === 'text' ? 'Update' : 'News'}
      </span>
    </motion.button>
  );
}

function AddStoryButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-2 min-w-[70px]"
    >
      <div className="relative p-[3px] rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30">
        <div className="w-16 h-16 rounded-full bg-[#22252b] flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-purple-500 transition-colors">
          <Plus size={24} className="text-gray-400" />
        </div>
      </div>
      <span className="text-[10px] text-gray-400">Add Story</span>
    </motion.button>
  );
}

interface StoryModalProps {
  story: Story | null;
  onClose: () => void;
}

function StoryModal({ story, onClose }: StoryModalProps) {
  if (!story) return null;

  return (
    <Dialog open={!!story} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-[#181A1E] border-white/10 text-white max-w-lg p-0 overflow-hidden">
        <div className="relative aspect-[9/16] max-h-[80vh] bg-gradient-to-br from-[#22252b] to-[#15171a]">
          {story.image ? (
            <img src={story.image} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <p className="text-xl md:text-2xl text-center font-medium leading-relaxed">
                {story.content}
              </p>
            </div>
          )}
          
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                <div>
                  <p className="text-sm font-medium">Vault Hunter</p>
                  <p className="text-xs text-gray-400">{story.timestamp}</p>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X size={20} />
              </Button>
            </div>
          </div>

          {story.image && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm">{story.content}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface DiscussionPostProps {
  post: SellerPost;
}

function DiscussionPost({ post }: DiscussionPostProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-xl bg-[#22252b]/50 border border-white/5 hover:border-purple-500/20 transition-all"
    >
      <div className="flex gap-3">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-white text-sm">{post.author}</span>
            <span className="text-xs text-gray-500">{post.timestamp}</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">{post.content}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 text-xs transition-colors ${
                liked ? 'text-pink-500' : 'text-gray-500 hover:text-pink-400'
              }`}
            >
              <Heart size={14} className={liked ? 'fill-current' : ''} />
              <span>{likeCount}</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors">
              <MessageCircle size={14} />
              <span>{post.comments}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SellerProfile() {
  const [match, params] = useRoute("/seller/:id");
  const [, setLocation] = useLocation();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  if (!match || !params) return null;

  const seller = mockSellers.find(s => s.id === params.id);

  if (!seller) {
    return <div className="text-white">Seller not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-4 md:pt-24">
        <Button 
          variant="ghost" 
          className="mb-4 text-gray-400 hover:text-white pl-0 hover:bg-transparent"
          onClick={() => setLocation('/marketplace')}
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Market
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
            <h2 className="text-lg font-display font-bold text-white">Stories</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <AddStoryButton />
            {mockStories.map((story) => (
              <StoryCircle
                key={story.id}
                story={story}
                onClick={() => setSelectedStory(story)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="md:col-span-1 lg:col-span-1 order-1 md:order-1">
            <div className="bg-[#22252b] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5 md:sticky md:top-24">
              <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                <div className="relative">
                  <Avatar className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 border-4 border-gradient-to-br from-purple-500 to-blue-500 shadow-2xl mb-3 sm:mb-4">
                    <AvatarImage src={seller.avatar} alt={seller.name} />
                    <AvatarFallback>{seller.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-[#22252b]">
                    <Star size={14} className="text-white fill-white" />
                  </div>
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white mb-1">{seller.name}</h1>
                <p className="text-purple-400 font-medium text-sm sm:text-base mb-3 sm:mb-4">{seller.handle}</p>
                
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
                   <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 border-none text-xs sm:text-sm">
                     <Star size={10} className="sm:w-3 sm:h-3 mr-1 fill-current" /> {seller.rating}
                   </Badge>
                   <Badge variant="outline" className="border-white/10 text-gray-400 text-xs sm:text-sm">
                     <MapPin size={10} className="sm:w-3 sm:h-3 mr-1" /> New York, USA
                   </Badge>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {seller.bio}
                </p>

                <div className="flex gap-2 sm:gap-3 w-full">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 text-sm sm:text-base h-9 sm:h-10">
                    Follow
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-9 sm:h-10 w-9 sm:w-10 p-0">
                    <Share2 size={14} className="sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 sm:pt-6">
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-gray-500">Member Since</span>
                  <span className="text-gray-300">Dec 2023</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-gray-500">Total Sales</span>
                  <span className="text-gray-300">$1.2M+</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">Response Time</span>
                  <span className="text-gray-300">&lt; 1 Hour</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-2 flex flex-col justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] order-2 md:order-2">
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white">Collection Highlights</h2>
                <p className="text-gray-500 text-xs sm:text-sm">Swipe cards to browse inventory</p>
              </div>
              <Badge variant="outline" className="border-purple-500 text-purple-400 text-xs sm:text-sm">
                {seller.items.length} Items
              </Badge>
            </div>
            
            <CardStack items={seller.items} />
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-display font-bold text-white">Discussion Feed</h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {mockSellerPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DiscussionPost post={post} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
            >
              Load More Posts
            </Button>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedStory && (
          <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
