<div align="center">
  <img alt="Logo" src="https://user-images.githubusercontent.com/29705703/128719328-ed17026c-09f8-4f7c-a435-02881dc49b96.png" width="100px" />
</div>
<h1 align="center">
  christopher-morales.vercel.app
</h1>
<p align="center">
  My portfolio built with <a href="https://nextjs.org/" target="_blank">Nextjs</a> and hosted with <a href="https://www.vercel.com/" target="_blank">Vercel</a>
</p>
<p align="center">
  <a href="https://vercel.com/artorias961/christopher-morales" target="_blank">
    <img src="http://therealsujitk-vercel-badge.vercel.app/?app=portfolio&style=for-the-badge" alt="Vercel Status" />
  </a>
</p>

# Hi, I'm Christopher Morales (artorias961)
Welcome to my portfolio repository! This is where I showcase my personal website that highlights my professional background, projects, and technical skills.

What’s Inside:
- **About Me**: A bit about who I am, my journey, and what I’ve accomplished.
- **Projects**: A collection of work I’ve done, including robotics, computer vision, and web development.
- **Tech Stack**: Built with Next.js, HTML/CSS, and other modern tools to ensure a clean and responsive design.
This portfolio is a reflection of my passion for engineering, coding, and creating meaningful projects. Feel free to check it out and connect with me!

## Reference
This portfolio was built on top of [Tailwind Next JS Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template which comes with built-in blogs functionality and much more! 


## Tree Structure

- Project
   - config\projects.ts

- Widget Colors
   - config\color.ts

- Blogs
   - data\blog

- Skills
   - config\stack.ts

- Social Icon
   - components\SocialIcons.tsx

- About Me Page
   - data\authors\default.md
      - To add another file (step 1)
   - layouts\AuthorLayout.tsx
   - types\AuthorFrontMatter.ts

- Navigation bar (top section/universal links)
   - data\headerNavLinks.ts

- Footer
   - components\Footer.tsx

- Metadata
   - data\siteMetadata.js

- Home Page (need to modify those two files)
   - components\banner.tsx
   - data\siteMetadata.js
   - data\headerNavLinks.ts

- To add a new page/section
   - pages\
      - Then create a file using the *.tsx* file extension
      - Create a style for the page, how it will look
