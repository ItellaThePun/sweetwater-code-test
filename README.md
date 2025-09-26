# Sweetwater Code Test
This is my React project for the Sweetwater Code test. I was tasked with developing a product review form based on a figma design that was provided. I was also given JSON data to populate existing review cards with.

Reusable, data driven components:
- I created a reusable Review Card component that can receive data from a JSON string and populate review data in the cards
- After some research, I also found that Material UI already had a rating component that I snagged and used for the review stars section. I was able to use this both for the submit form and a read only version for the review cards.

What I'd implement in the future:
- I would've loved to have made the Read More cutoff not happen in the middle of a word. It probably wouldn't have been too bad to implement, but it was a 'nice to have' and I was already approaching the time limit I set for myself.
- An image preview would've been nice for the file selector. Again, on the nice to have list.
- Another good data driven component to implement would have been an "average reviews" component, but that felt a bit out of the scope of this project.
- Lack of labels for the star selector component were probably my biggest regret.

Very good designTM callouts:
- I gave labels the htmlfor attribute so screen readers/etc could pick up on which label went with which field
- I gave the inputs titles for similar purposes
- I seperated my form and review cards into their own components and referenced them in the app, rather than building them
- I created a seperate css file rather than styling everything in the components. That would've been messy!
- I did my best to organize the css file so that the styles were all grouped together by what they were relevant to.

You will find that the submit form writes the Title, Star level, and Description to the console!

Thanks for your time and the opportunity :)
-Chase
