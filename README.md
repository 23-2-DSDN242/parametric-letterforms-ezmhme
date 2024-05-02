[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xQz3oEP8)
# MDDN 242 2024 Assignment 2
## Geometry Font - Emerson Hemingway

Each of my letters is composed of two arcs and two quads. The size and position of the arcs and quads are controlled by twenty-eight parameters. I desired to create a typeface that captured aesthetic influence and inspiration from geometric forms, incorporating sharp corners and curved shapes in each letter/number.

### The twenty-eight parameters per letter:
  * `1quadx` : Controls the first x-coordinate of the first quad
  * `1quady` : Controls the frist y-coordinate of the first quad
  * `2quadx` : Controls the second x-coordinate of the first quad
  * `2quady` : Controls the second y-coordinate of the first quad
  * `3quadx` : Controls the third x-coordinate of the first quad
  * `3quady` : Controls the third y-coordinate of the first quad
  * `4quadx` : Controls the fourth x-coordinate of the first quad
  * `4quady` : Controls the fourth y-coordinate of the first quad
  * `1quadx2` : Controls the first x-coordinate of the second quad
  * `1quady2` : Controls the first y-coordinate of the second quad
  * `2quadx2` : Controls the second x-coordinate of the second quad
  * `2quady2` : Controls the second y-coordinate of the second quad
  * `3quadx2` : Controls the third x-coordinate of the second quad
  * `3quady2` : Controls the third y-coordinate of the second quad
  * `4quadx2` : Controls the fourth x-coordinate of the second quad
  * `4quady2` : Controls the fourth y-coordinate of the second quad
  * `ArcX` : Controls the x-coordinate of the first arc's ellipse
  * `ArcY` : Controls the y-coordinate of the first arc's ellipse
  * `ArcW` : Controls the width of the arc's first ellipse
  * `ArcH` : Controls the height of the frist arc's ellipse
  * `ArcX2` : Controls the x-coordinate of the second arc's ellipse
  * `ArcY2` : Controls the y-coordinate of the second arc's ellipse
  * `ArcW2` : Controls the width of the second arc's ellipse
  * `ArcH2` : Controls the height of the second arc's ellipse
  * `arcStart` : Controls the angle of which to start the first arc, specified in degrees
  * `arcEnd` : Controls the angle of which to end the first arc, specified in degrees
  * `arcStart2` : Controls the angle of which to start the second arc, specified in degrees
  * `arcEnd2` : Controls the angle of which to end the second arc, specified in degrees

![alt text](<preview (1).jpg>)
To begin the assignment I coded in a sketch idea of geometric looking letters, this was the origin of my project which then helped me develop the idea further to then become my alphabet.

![alt text](<preview (10).jpg>)
Finalised 'sketch' of intial font and colour palette concept.

![alt text](<preview (2).jpg>)
I then started working on my alphabet, drawing inspiration from geometric forms shapes to create letterforms. Once I got my letters looking how I wanted, I plugged these into the letters system.

![alt text](<preview (5).jpg>)
As I created more letters in my alphabet I came to find that I had been using the project's system completely incorrectly so therefore had to essentially restart all of my letterforms. Phoebe helped me to add all my parameters into editor.js but I had trouble getting this feature to work and preferred to manually input coordinates based on the (0,0)x(100, 200) bounding box. I progressed with my alphabet forms and began editing details such as colour palettes and smaller details, such as differentiating my 'O' and '0'.

![alt text](<preview (8).jpg>)
At this point I continued adding small details to ensure each of my letters included both grey and white colours from my colour palette.

![alt text](<preview (9).jpg>)
After completing all my letterforms, I input all of my parameters into the interaction system to have the letters interpolate smoothly.

### Experimentation of varying colour palettes
![alt text](<Screenshot (245).png>) 
![alt text](<Screenshot (247).png>) 
![alt text](<Screenshot (246).png>)
I wanted a colour palette that matched the geometric appearance of my letterforms but found this experimentation too intense so ended up opting for a more 'neutral' looking palette that still matched my geometric aesthetic.

### Final exhibition display of font title
![alt text](<preview.jpg>)

## Reflection
In the event that I botched my intial coding of draw_letters.js and letters.js, it did mean that I had to restart my whole alphabet again, this unfortunately meant that I didn't have the chance to spend as much time as I woudl've liked to work on interpolation but I am pleased with the way it performs using the default interpolation system. Due to wanting to use quads and arcs, which include a lot of parameters, this meant that I did use more than the desired amount of parameters as stated in the brief. This use of many parameters meant that I couldn't add a colour parameter, causing the 'grey' shapes of my letters to be slightly inconsistent. If I were able to I would've liked to have the largest part of each letter to have been grey. In place of this matter I included grey accents in each letter that was initially only white. In all other respects this project was enjoyable and taught me a lot of new coding techniques. I am very pleased with the final outcome of my font and feel that I captured the geometric aesthetic I desired for efficiently.