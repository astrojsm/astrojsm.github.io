// JavaScript source code

const quotes = [
    {
        quote: "Let us not desert one another; we are an injured body.",
        author: "Jane Austen - Northanger Abbey"
    },
    {
        quote: "Now, here, you see, it takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must at least twice as fast as that!",
        author: "Lewis Carroll - Through the Looking-Glass and What Alice Found There"
    },
    {
        quote: "Whatever life you lead you must put your soul in it\u2014to make any sort of success of it; and from the moment you do that it ceases to be romance, I assure you: it becomes grim reality!",
        author: "Henry James - The Portrait of a Lady"
    },
    {
        quote: "For the fairies dwell only in the kingdom of Happiness; having no souls they cannot enter the Kingdom of Sorrow.",
        author: "L. M. Montgomery - Emily of New Moon"
    },
    {
        quote: "She always had the feeling that it was very, very dangerous to live even one day.",
        author: "Virginia Woolf - Mrs Dalloway"
    },
    {
        quote: "Such are the conditions attached to this guineas. You shall have it, to recapitulate, on condition that you help all properly qualified people, of whatever sex, class, or colour, to enter you profession.",
        author: "Virginia Woolf - Three Guineas"
    },
    {
        quote: "Do nothing because it is righteous or praiseworthy or noble to do so; do nothing because it seems good to do so; do only that which you must do and which you cannot do in any other way.",
        author: "Ursula Le Guin - The Farthest Shore"
    }
];

function getRandomQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
};

var toastTrigger = document.getElementById('ToastBtn')
var quoteToast = document.getElementById('quoteToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        getRandomQuote();
        var toast = new bootstrap.Toast(quoteToast);
        toast.show();
    })
}