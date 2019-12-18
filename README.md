# Will Andy Pick Me?
### FE1 Solo Challenge

## Background

The Magic 8 Ball had a place in Toy Story movies 1-3. Most famously, Sheriff Woody asked the Magic 8 Ball "Will Andy pick me?", and the answer was "Don't count on it". More on the Magic 8 Ball in Toy Story can be found [here](https://pixar.fandom.com/wiki/Magic_8-Ball).

![Sheriff Woody reaching down to a Magic 8 Ball](https://vignette.wikia.nocookie.net/pixar/images/9/90/Magic8ball.jpg/revision/latest?cb=20100720033217)

## Purpose

This Solo Challenge gives students and instructors the opportunity to get a pulse on where you are with the foundational concepts of Module 1 curriculum.

- Students should use this as an opportunity to challenge themselves and work completely independently. Google can (and probably should!) be used, but peers or mentors should not be consulted and any other code base should not be referenced.
- Instructors will be able to use your work, both completion of functionality and code quality, to determine where you stand and if you are behind for this point in the module, provide supports to intervene.

## Setup

- Clone this repo down to your machine
- `cd` into the repository
- Run `git remote remove origin`
- On GitHub, create a new repository and connect to this local repository
- Read this README thoroughly, then begin working!

## Deliverable

Provide the link to **your** repo and GitHub Pages in your gist.

## Workflow

Commit at the end of each iteration (if not more frequently) for good habits!

**Iteration 0:** Build Out Comp

- Images of comp below
- An assets directory is provided in the repo, and colors are provided in the CSS file
- Do _not_ spend time making this page responsive

**Iteration 1:** Add Random Message Functionality

- When a user types in a question then clicks the "Get your answer" button, the use sees their question and a random answer from the list of possible answers (a list of the possible random answers is provided below)
- The input field the user typed the question into should clear as soon as they click the "Get your answer" button
- When the question and answer appear, the image of the 8 ball disappears

**Iteration 2:** Clear Functionality, error checking

- The user can also click a clear button, which clears the page of any message. User should only be able to click the clear button if a question/answer are visible. When the clear button is clicked and the question/answer are removed, the image of the 8 ball should re-appear.
- User should not be able to ask for an answer unless they have typed something into the question box.

**Iteration 3:** Level Up

- *NOTE: You should absolutely not be working on this unless your UI is solid and you are 100% sure that all of Iterations 1-2 are fully functional and bug free.*
- Once user clicks and sees an answer, they can click a "favorite" button. That question and its answer should then be on a list of favorited question/answer pairs
- The user can favorite as many or as few question/answer pairs as they like
- When the user refreshes the page, all favorites will be gone
- No guidance is provided for the layout of this; use your best judgement and work to keep it consistent with the look and feel of what you built in Iteration 1!

### Possible Answers

- It is certain.
- It is decidedly so.
- Without a doubt.
- Yes - definitely.
- You may rely on it.
- As I see it, yes.
- Most likely.
- Outlook good.
- Yes.
- Signs point to yes.
- Reply hazy, try again.
- Ask again later.
- Better not tell you now.
- Cannot predict now. 
- Concentrate and ask again. 
- Don't count on it.
- My reply is no.
- My sources say no.
- Outlook not so good.
- Very doubtful.

### Comps

<img width="973" alt="Zero state" src="https://user-images.githubusercontent.com/25447342/62751672-c8f99e00-ba21-11e9-9029-7855eb7524fa.png">

<img width="1109" alt="After a user has requested an answer" src="https://user-images.githubusercontent.com/25447342/62751671-c8f99e00-ba21-11e9-90e5-4dc648ae2d6a.png">


