# pui-a8: Emily Ngo
This is my art portfolio used to showcase some of the best artwork that I have made throughout the years. This website allows the viewer to have an idea about my skill, the type of artwork that I make, my art style, and the themes I engage with. I imagine the person viewing this website would be someone seeking evidence of my art skills, so this website could be viewed by a potential customer or a person seeking to commission artwork. As a result, I want the images to stand by themselves without interference of text or other images. Through the design choices I’ve made, I think I convey that I am skilled in both traditional media and digital media.

## Video: 
[YouTube Video Explaination](https://youtu.be/HoIdN3liEy0)

## Figma:
[Figma](https://www.figma.com/file/5VZD7uhLcQsRtiCKqGSwDd/PUI-a7?node-id=0%3A1 ).


## Interactions: 
1. Gallery View - Click the heart logo or My Name in the nav bar
2. About Me - Click on the About Me link in the nav bar or open the hamburger menu in tablet/mobile view and then click the link
3. Slide View - Clicking on an image in Gallery View will take them to slide view of that image where they can learn more about that image.
4. Previous/Next Slide - Click on the arrows at the top of the image (mobile) or on the side of the image (tablet, desktop) to see a new image
5. Return to Gallery View - by clicking return to gallery view at the top of the image or on the right of the image, the user can go back to viewing the images in gallery mode
6. Generate new beetle - Go the about me page and click on the frame with the beetles in it

## External Libraries: p5.js - Beetle Generator
I chose to p5.js to build myself a logo because it is a specialized JS library to build artwork. I wanted to create something that is interactive, aesethically pleasing and reflect my personality. I used it to procedurally generate beetles in a fun, pop art style since I wanted to create a logo reflective of my styl and personality. I created a base beetles by using the shape tools provided by p5.js and creating an analogous color scheme function. Afterwards a made the beetles change when the user clicked on them. 

Originally, I planned to use this as a logo that flashed and changed. However, when it came time to imbed image the iframe, there was the p5.j logo which was distracting so I decided to feature my project on the About Me page. The flashing was also distracting, so I changed the interaction to a click. This project works in place of portrait since it expresses my personality well and also protects my identity since I'd rather not show my face. 

To interact with the project, simply click on the project to see a new beetle generated.

## Iterations compared to HW7
I really wanted to featured a fixed vertical nav bar that highlighted artwork information for this project. However, I realized that it was hard to fit information in that space especially considering how much I like to describe my artwork. I had to remove the feature of my digital artwork, but will add it in a future iteration since I am struggling to get the iframes fit each art work considering each piece has its own height and width. 

## Major Challenges
I had problems with the external libraries I was working with the most. I orginally was using materialize but midway through development, the javascript began acting weird so I needed to switch to Bootstrap which made me need to restructure my design and change my code. Additionally, I struggled with getting iframes to be responsive and display on smaller screens, so I cannot display the art I have previously made using p5.js

## Future Installations
1. Add digital art projects - I am passionate about art and code and I love procedural generation. My beetle project is just one example.
2. Allow the users to switch between different viewing modes - traditional art, digital media, and all artwork. I have the javascript foundations in place and the html code ready to make it happen. However, I am running out of time and would like to focus on showcasing my current art work
3. Include contact information - I orginally had my socials and contact info, but I'm not proud of this project and would rather not have this project connected to me quite yet

### Note: There is a python file included to generate the JSON file used to store all artwork. It is a helper function for myself and is not called by the actual website. 

