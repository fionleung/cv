const path= window.location.href;

export const data=[
    {
    sectionName:'Web/APP development',
    projects:
    [
        {title:'E-commerce website',
        content:['Fetch product information from database then display by categories',
        'Enable user management: registe sign in/out',
        'Leverage stripe for payment',
        'React/Redux + Firebase'],
        imgurl:path+'/img/greenclothes.jpg',
        button:'View website',
        link:'https://green-clothes.herokuapp.com/',
        id:1
    },
        {title:'Photography blog',
        content:['Enable justified layout for image display.',
        'Implemented infinite scroll and image lazy loading to improve performance.',
        '"MERN"stack: MongoDB + Express + REACT + Node.js'],
        imgurl:path+'/img/money.jpg',
        button:'View website',
        link:'https://money-thecat.herokuapp.com/',
        id:2
    },
    {title:'iOS App for Cloud-based Multi-Vehicle Control System',
    content:['Provided user/vehicle/task management for autonomous car system.',
    'Swift5 + Firebase.'],
    videourl:'https://youtu.be/aWaX1WtIePk',
    button:'View code here',
    link:'https://github.com/fionleung/smartCar',
        id:3
    },
    {title:'Web-based Dashboard for Green building system',
    content:['Provided a dashboard to retrieved with summary and list for NoSQL.',
    'HTML5/CSS + Bootstrap 4 + JavaScript + Node.js + MongoDB + AWS.'],
    videourl:'https://youtu.be/P1rh-F07-8w',
    button:'View code here',
    link:'https://github.com/fionleung/greenbuilding',
        id:4
    }
    ]
},
{
    sectionName:'Deep learning',
    projects:
    [
        {title:'Object Detection',
        content:['Trained a model to detect 7 types of lane marking (e.g., double yellow, dot white) in videos/pictures.','Python + TensorFlow + OpenCV + AWS'],
        imgurl:path+'/img/detect.gif',
        button:'View code here',
        link:'https://github.com/fionleung/lane-marking-detection-with-Mask-RCNN',
        id:1
    },
    {title:'Entertainment Chatbot',
    content:['Utilized Transformer architecture to train a chatbot that could talk to for fun.',
    'Python + TensorFlow + Transformer + AWS'],
       imgurl:path+'/img/chatbot.jpg',
       button:'View code here',
       link:'https://github.com/fionleung/deepLearning/blob/master/chat_with_stan.ipynb',
    id:2
    }
    ]
}
]
