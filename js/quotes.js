// JavaScript source code

const quotes = [
    {
        quote: "Nolite te bastardes carborundorum.",
        author: "Margaret Atwood, <The Handmaid's Tale>"
    },
    {
        quote: "Let us not desert one another; we are an injured body.",
        author: "Jane Austen, <Northanger Abbey>"
    },
    {
        quote: "Now, here, you see, it takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must at least twice as fast as that!",
        author: "Lewis Carroll, <Through the Looking-Glass and What Alice Found There>"
    },
    {
        quote: "How dreary \u2014 to be \u2014 Somebody! How public \u2014 like a Frog \u2014 To tell one's name \u2014 the livelong June \u2014 To an admiring Bog!",
        author: "Emily Dickinson, <I'm Nobody! Who are you?>"
    },
    {
        quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
        author: "F. Scott Fitzgerald, <The Great Gatsby>"
    },
    {
        quote: "Whatever life you lead you must put your soul in it\u2014to make any sort of success of it; and from the moment you do that it ceases to be romance, I assure you: it becomes grim reality!",
        author: "Henry James, <The Portrait of a Lady>"
    },
    {
        quote: "Do nothing because it is righteous or praiseworthy or noble to do so; do nothing because it seems good to do so; do only that which you must do and which you cannot do in any other way.",
        author: "Ursula K. Le Guin, <The Farthest Shore>"
    },
    {
        quote: "For the fairies dwell only in the kingdom of Happiness; having no souls they cannot enter the Kingdom of Sorrow.",
        author: "L. M. Montgomery, <Emily of New Moon>"
    },
    {
        quote: "She always had the feeling that it was very, very dangerous to live even one day.",
        author: "Virginia Woolf, <Mrs Dalloway>"
    },
    {
        quote: "Yet still, for all her travels and adventures and profound thinkings and turnings this way and that, she was only in process of fabrication. What the future might bring, Heaven only knew. Change was incessant, and change perhaps would never cease.",
        author: "Virginia Woolf, <Orlando: A Biography>"
    },
    {
        quote: "One must, one always must, do something or other; it is not allowed one simply to enjoy oneself. Was it not for this reason that, some time ago, we fabricated the excuse, and invented the necessity of buying something? But what was it? Ah, we remember, it was a pencil. Let us go then and buy this pencil.",
        author: "Virginia Woolf, <Street Haunting: A London Adventure>"
    },
    {
        quote: "Such are the conditions attached to this guineas. You shall have it, to recapitulate, on condition that you help all properly qualified people, of whatever sex, class, or colour, to enter you profession.",
        author: "Virginia Woolf, <Three Guineas>"
    }
];

function getRandomQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
};

var toastTrigger = document.getElementById('ToastBtn');
var quoteToast = document.getElementById('quoteToast');
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        getRandomQuote();
        var toast = new bootstrap.Toast(quoteToast);
        toast.show();
    })
};
