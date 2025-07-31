import posts from "@/store/posts";
import postsStatic from "@/store/posts-static";

import Image from "next/image";

import { IoCopySharp } from "react-icons/io5";
import { PiFilmReelFill } from "react-icons/pi";
import { TbPinnedFilled } from "react-icons/tb";

const Gallery = async () => {
  const status = (await fetch(posts[0].image)).ok;

  if (status) {
    return (
      <div className="md:px-0 px-4 grid md:grid-cols-3 grid-cols-2 w-fit max-w-[1100px] gap-0.5">
        {posts.map((post, index) => (
          <a target="_blank" href={post.link} key={index}>
            <div className="w-[100%] h-auto max-w-[320px] max-h-auto overflow-hidden group cursor-pointer relative">
              {post.type == "Pinned" && (
                <TbPinnedFilled className="absolute top-2 right-2 w-8 h-auto text-white z-20 rotate-45" />
              )}
              {post.type == "Clip" && (
                <PiFilmReelFill className="absolute top-2 right-2 w-8 h-auto text-white z-20" />
              )}
              {post.type == "Carousel" && (
                <IoCopySharp className="absolute top-2 right-2 w-8 h-auto text-white z-20" />
              )}
              <Image
                src={post.image}
                height={320}
                width={570}
                alt="Post do instagram"
                className="group-hover:scale-110 transition duration-300 w-full h-full object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="md:px-0 px-4 grid md:grid-cols-3 grid-cols-2 w-fit max-w-[1100px] gap-0.5">
      {postsStatic.map((post, index) => (
        <a target="_blank" href={post.link} key={index}>
          <div className="w-[100%] h-auto max-w-[320px] max-h-auto overflow-hidden group cursor-pointer relative">
            {post.type == "Pinned" && (
              <TbPinnedFilled className="absolute top-2 right-2 w-8 h-auto text-white z-20 rotate-45" />
            )}
            {post.type == "Clip" && (
              <PiFilmReelFill className="absolute top-2 right-2 w-8 h-auto text-white z-20" />
            )}
            {post.type == "Carousel" && (
              <IoCopySharp className="absolute top-2 right-2 w-8 h-auto text-white z-20" />
            )}
            <Image
              src={post.image}
              height={320}
              width={570}
              alt="Post do instagram"
              className="group-hover:scale-110 transition duration-300 w-full h-full object-contain"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Gallery;
