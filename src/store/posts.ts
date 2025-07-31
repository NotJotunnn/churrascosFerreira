export type PostType = {
  image: string;
  link: string;
  type: "Pinned" | "Clip" | "Carousel" | "Post";
};

const posts: PostType[] = [
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/523930020_17847449106530754_7645330166665089931_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzY4NDEwNzMzNjYwMzMyMjMxOA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=uhiiMcXz8u8Q7kNvwFTJ8an&_nc_oc=Adkyb_VN8YuK-0Gs1v4LHG6Yac08GxG0AyAnkt4JqUCYqb0LQKT4MTdktZLVZYZGZGYv7C8uYgNwabkHuih8m2XX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfTKAOa9ZQjwx9nmtjx8UNtvAQw7jU1kLellEAYSv0wCfw&oe=688D8F6F",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMglBp4psfO/",
    type: "Pinned",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/520973568_17846096631530754_5050961922065879939_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzY3OTQ3NjkxNzM1NTU5NDQ4MQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=BW59xs46QxUQ7kNvwHfpu-w&_nc_oc=AdmGul9ltJAj_VF0TAJEO1kHsf-fSrGBeqnGQtvD1vimsYcUfit8nrr8kYtrVoXuh3EdYaXq3DHAAXgF6zH793fW&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfRV7DgIW1LuDZRRhXcPUe3so3oxXns5DY1X8Wgkto7DEw&oe=688D7195",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMQIML6OsLx/",
    type: "Pinned",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/519528167_17845308342530754_7683216640895102612_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzY3NjYyNjg0MDA2NDc1NDM1NA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=wPiJXoS_AUMQ7kNvwE2Jtbn&_nc_oc=AdmrBqWoAHAbv0KgY4bAXA3tMJiDg7adRtwJSPsKGkeXzacFjh829OCH9PEZ4JbSONJdOHRfL5gtEE93KpItamlL&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfSieswoA9ysY2FJBwDDDtlq0CSDJmwlOi42fUyrqkPIGg&oe=688D953C",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMGAKGlugKy/",
    type: "Pinned",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.71878-15/521639691_755886294048038_5797436223099080684_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzY4NjA0NjYxMzA2NDEzNzUyNg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=0pv1HNwupKcQ7kNvwGfqR64&_nc_oc=Adn1BqPTGuw3voWgp-j6mwgAwsCOq9BOaABcW87GTGeugmMMnMVMPoaABFtQjBVKEvARLp5HvuqqqQoD0P5--D8g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfRrrbTyFe3_0714AgaOav52t_iCJyA8oVfkOhqXABFvFg&oe=688D7299",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMnd911ODs2/",
    type: "Clip",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/522009999_17846998017530754_3727522683408501433_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzY4MjU5NzkyNTEyNDU5NjgzMg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Oxga5qplTZwQ7kNvwFBbmuc&_nc_oc=AdkWilNClMuTGMhK9Fg15mX_7YhkoEcC-bE4LYKp9a8nfa8ByfrIaUylIUlU16l0gqFhycZSvZL4lDnSBsp92N_-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfRmpHqvRZe8VTchn1TiNxESDsD1DnJvWf35NzpPcwXwbA&oe=688D66A6",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMbN005pGRg/",
    type: "Clip",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/523104770_17846787405530754_4003415701597680436_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzY4MTg1NzkzNzQ0OTY4MzI1Nw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=zhGY4LhifRQQ7kNvwFkj7zM&_nc_oc=AdlZXSM0Qih4WNEduI3s8KMx1h-0yooGtQV-Oh-Z_-sxwXKRWS6WkVsCFPGHEef4phvg9AUDqsEA68D4FSjHEDJu&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfSRtwxGpIdmThEcyhdlkejX5UGwtTTohb-hQEeF6EDuYA&oe=688D6214",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMYlklrJAk5/",
    type: "Clip",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/519640732_17846377854530754_6905923828957301573_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzY4MDQ1MjM2NTM1MzY5ODQwMzE3ODQ2Mzc3ODQ4NTMwNzU0.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=z8wkRNqooTUQ7kNvwF0AUvm&_nc_oc=Adkn_xBRpB7mK2wsbnSzhbEkZa3tPvj1Ja1olmQgrB-a3G_uySclSAtjGSqGOEts5ugVxgDn3xqaCWt9azA8sCle&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfSmiifKImXh4kDtLdP-Da_pGwhdgf2cJi4HdTWtkMFFCQ&oe=688D6C94",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMTl-0pp0Rj/",
    type: "Clip",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/520290322_17845762242530754_1070428767030943963_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzY3ODI3NDc5MTEzMzQzNjUwOQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=2bKbOD3--XMQ7kNvwEjdFdv&_nc_oc=AdmVAH-T4PwU2L00fhB5L3PzMqCfV8cpLk5F4S8SS7KTsB5nIQepYg6lAj_VtOsyPcktuMiO06DRGYxXV7kFfSxv&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfSXN8KGHVwdqbfCfrr7aenNfu4TIgmqQ081YeBGuMV8DQ&oe=688D7F85",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DML228nyFpd/",
    type: "Clip",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/520985575_17845751808530754_302197728973950462_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzY3ODIzMzcyMjUxMzczNTU5NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=70SbRvMWFLsQ7kNvwGcrgVa&_nc_oc=Adk9dd4vhdIENNwxI4i-Z9fufmtCpVa1LG1c0hTg_UX3IGfOZOL7iQOLGCKglJLpp_Z1Ue2okLycTNe_Dq1YSc1j&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfSweqO7ZyP22uYTjOcn6K4ZUPQdoYY0pDG9wx86-KFpSg&oe=688D9013",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMLthUfSz-r/",
    type: "Clip",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/522956494_17846815872530754_4677909206497839213_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzY3NzMzMDg4ODg0NTc0NjM2NjE3ODQ2ODE1ODY2NTMwNzU0.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=fb1cbQP-gZcQ7kNvwEfIIkj&_nc_oc=AdnL0_UMXYkjahTamRfkuVGNC8gNRXg4CYHcM6o9tyr5Z_8I6VSS-POExz7loC85QwPGwvlZ0PJvU1CRnuhWF1aw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfS0-z8v4p0MMqPbTugRlfhJybs1htmz_2iuVzxXC0NtdA&oe=688D72BE",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DMIgPXHOOC-/",
    type: "Clip",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/516933868_17844196695530754_8545871859991070934_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=100&ig_cache_key=MzY3MjM5NDEzMjM0NjQ3MzU2Ng%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjMyNDB4NTc2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=IIf1bZhVbowQ7kNvwHizUm2&_nc_oc=Adm3IzUpoETplwL9I67OR8-QsKEZtJN2z174WStjAuvMFte7PjkrWdW5zqi9aBs2nkNOZOW9SqVC8QivXELABT9e&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3ag7uI14QmKVpgWm9JJliw&oh=00_AfSwjAKghnoErNe_6kvw19y0ugupJ2HVr9gBvMBgeEaDrQ&oe=688D80C5",
    link: "https://www.instagram.com//churrascosferreiradf/reel/DL29wGVvYxe/",
    type: "Clip",
  },
];

export default posts;
