# Letter Pair Memory Trainer

#### This project it's to solve a personal problem of practice my short memory to speed up my memo time in the 3BLD and MBLD solves.

#### DEMO: https://willian-pessoa.github.io/letter-pairs-memo/

#### VIDEO DEMO: 
[![LetterPair memory Trainer](https://res.cloudinary.com/marcomontalbano/image/upload/v1637159046/video_to_markdown/images/youtube--9gNI6q5VJVs-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=9gNI6q5VJVs "LetterPair memory Trainer")

# How the app Works

## Main Panel
#### You start in the main panel where you can see the level (and change it), this level defines how many cards of letter pairs going to be shown in the memorization panel. Here you can see too the last result, if you can recall all the pairs, you ganna see the text right. By the end, how many trys in this session(refresh the page set it to 0), the time you spend in the memorization panel, and the time in the recall panel.

![Main Panel](readme_imgs/memopanel.png)

## Memorization Panel
#### This panel gonna show the cards with the pairs you need to memorize

## Recall Panel
#### Here have an input element, you text the letter pairs with space between the letters("AB CD XW") you can type without spaces ("ABCDXW") too.

## Check panel
#### You can visualize your answer like cards and compare with the right answer, wrong cards gonna be shown in red color, right cards gonna be shown in green color. 

## The Letters
#### The project only uses the follow letters to generate the cards: "ABCDEFGJKLMNOPQRSTUVWX", to change this you need to put your desired letters in the const LETTERS in App.js.
