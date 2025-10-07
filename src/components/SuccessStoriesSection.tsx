import { useState } from "react";
import heroImage from "@/assets/1st.jpeg";
import heroImage1 from "@/assets/2nd.jpeg";
import heroImage2 from "@/assets/3rd.jpeg";
import OptimizedImage from "./OptimizedImage";


type Story = {
  id: number;
  title: string;
  excerpt: string;
  fullContent?: string;
  byline: string;
  image: string;
};

const stories: Story[] = [
  {
    id: 1,
    title: "🎤 TOWN HALL 2025 – A SUCCESSFUL GATHERING OF MINDS 🏛️",
    excerpt:
      "We're thrilled to share that our recent Town Hall meeting was a resounding success! 💬✨ It was more than just an internal event — it was a moment to reflect, realign, and recharge. From sharing achievements and setting future goals, to hearing valuable feedback and celebrating team milestones, the energy in the room was nothing short of inspiring.",
    fullContent: `We're thrilled to share that our recent Town Hall meeting was a resounding success! 💬✨

It was more than just an internal event — it was a moment to reflect, realign, and recharge. From sharing achievements and setting future goals, to hearing valuable feedback and celebrating team milestones, the energy in the room was nothing short of inspiring.

A big thank you to all our team members who brought positivity, insight, and forward-thinking to the table. Your engagement fuels our journey ahead! 🚀

At Kattima Granite, we believe in transparent communication, team alignment, and building a culture of collaboration and purpose.

Here's to many more meaningful conversations and collective wins! 🙌`,
    byline: "BY KALYAN K GOKULDAS | 1 MONTH AGO",
    image: heroImage,
  },
  {
    id: 2,
    title: "🏆 Celebrating Our Stars – A Proud Town Hall Moment! 🎉",
    excerpt:
      "At Kattima Granite, we believe our biggest strength is our people — and that belief was beautifully celebrated at our recent Town Hall. In a room full of cheers, applause, and heartfelt smiles, we took a moment to recognize and reward the outstanding contributions of our team members. 🌟",
    fullContent: `🏆 Celebrating Our Stars – A Proud Town Hall Moment! 🎉

At Kattima Granite, we believe our biggest strength is our people — and that belief was beautifully celebrated at our recent Town Hall.

In a room full of cheers, applause, and heartfelt smiles, we took a moment to recognize and reward the outstanding contributions of our team members. 🌟

Whether it was dedication, innovation, teamwork, or going the extra mile — each winner was celebrated with a token of appreciation, and more importantly, with genuine respect and admiration from the entire Kattima family. ❤️

👏 The joy was real.
👏 The energy was high.
👏 And the sense of belonging? Stronger than ever.

Because when you value people, success follows.

Here's to our achievers, and to a workplace where every effort is seen, appreciated, and celebrated.`,
    byline: "BY KALYAN K GOKULDAS | 1 MONTH AGO",
    image: heroImage1,
  },
  {
    id: 3,
    title: "🎉 A Town Hall to Remember at Kattima Granite! 🏛️💬",
    excerpt:
      "What an incredible day of open conversations, laughter, and alignment at our recent Kattima Town Hall! The room was filled with energy, engagement, and a true sense of family. From heartfelt interactions with our leadership to enthusiastic participation from every team member — it was a clear reminder that Kattima isn't just a workplace, it's a happy family.",
    fullContent: `🎉 A Town Hall to Remember at Kattima Granite! 🏛️💬

What an incredible day of open conversations, laughter, and alignment at our recent Kattima Town Hall!

The room was filled with energy, engagement, and a true sense of family. From heartfelt interactions with our leadership to enthusiastic participation from every team member — it was a clear reminder that Kattima isn't just a workplace, it's a happy family.

✅ The management's transparent and friendly approach made everyone feel heard
✅ Team members brought valuable insights and ideas to the table
✅ We celebrated wins, discussed growth, and envisioned the future — together

When people feel connected, collaboration follows naturally.

Here's to building not just granite structures, but strong human bonds too. 💪❤️`,
    byline: "BY KALYAN K GOKULDAS | 1 MONTH AGO",
    image: heroImage2,
  },
];

const SuccessStoriesSection = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const handleReadStory = (storyId: number) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  return (
    <section
      id="peachpath"
      className="pt-0 pb-12 sm:pb-16 lg:pb-20 bg-[#F5D6CF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <div className="bg-[#F5D6CF] px-8 py-4 rounded-lg inline-block">
            <h2 className="mt-2 text-lg text-center sm:text-xl lg:text-4xl font-bold text-[#30404D] leading-tight">
              OUR SUCCESS STORY
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto">
              Discover how our approach has shaped careers and built workplaces
              where people thrive.
            </p>
          </div>
        </div>
        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {stories.map((s, index) => (
            <article
              key={s.id}
              className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[16/10] w-full overflow-hidden group">
                <OptimizedImage
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  {s.excerpt}
                  {s.fullContent && s.excerpt.length < s.fullContent.length && (
                    <span 
                      className="text-black font-semibold cursor-pointer hover:underline"
                      onClick={() => handleReadStory(s.id)}
                    >
                      ... more
                    </span>
                  )}
                </p>

                {expandedStory === s.id && s.fullContent && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#F5D6CF]">
                    <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">
                      {s.fullContent}
                    </div>
                  </div>
                )}
                
                {s.fullContent && (
                  <div 
                    className="mt-3 sm:mt-4 text-xs font-medium text-black flex items-center gap-1 hover:translate-x-1 transition-transform duration-300 cursor-pointer"
                    onClick={() => {
                      if (s.id === 1) {
                        window.open('https://www.linkedin.com/posts/kalyan-k-gokuldas-9a546228_townhall2025-teamkattima-leadershipinaction-activity-7352261804380573697-mBv9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzB8x0Bcl0JofdFgWQAAxr4vkwjBZniG24', '_blank');
                      } else if (s.id === 2) {
                        window.open('https://www.linkedin.com/posts/kalyan-k-gokuldas-9a546228_kattimatownhall-employeerecognition-teamcelebration-activity-7354020029543174145-Y5b6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzB8x0Bcl0JofdFgWQAAxr4vkwjBZniG24', '_blank');
                      } else if (s.id === 3) {
                        window.open('https://www.linkedin.com/posts/kalyan-k-gokuldas-9a546228_kattimatownhall-peoplefirst-companyculture-activity-7352925316199141376-VH3U?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzB8x0Bcl0JofdFgWQAAxr4vkwjBZniG24', '_blank');
                      } else {
                        // For other stories, you can add specific URLs later
                        window.open('#', '_blank');
                      }
                    }}
                  >
                  <span>Read customer story</span>
                  <span>→</span>
                </div>
                )}

                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-200 text-xs text-gray-500">
                  {s.byline}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
