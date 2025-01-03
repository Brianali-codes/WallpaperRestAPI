import express from 'express'
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
app.get('/', (request, response) => {

    const mobileLinks = {
        '2160x3840': 'https://picsum.photos/2160/3840',
        '1440x2560': 'https://picsum.photos/1440/2560',
        '1440x3040': 'https://picsum.photos/1440/3040',
        '1080x1920': 'https://picsum.photos/1080/1920',
        '1080x2160': 'https://picsum.photos/1080/2160',
        '750x1334': 'https://picsum.photos/750/1334',
        '640x1136': 'https://picsum.photos/640/1136',
        '540x960': 'https://picsum.photos/540/960',
        '720x1280': 'https://picsum.photos/720/1280',
        '720x1600': 'https://picsum.photos/720/1600'
    };
    const wideScreenLinks = {
        "1920x1080": "https://picsum.photos/1920/1080",
        "2560x1440": "https://picsum.photos/2560/1440",
        "2880x1620": "https://picsum.photos/2880/1620",
        "3840x2160": "https://picsum.photos/3840/2160",
        "2560x1600": "https://picsum.photos/2560/1600",
        "3200x1800": "https://picsum.photos/3200/1800",
        "1366x768": "https://picsum.photos/1366/768",
        "1600x900": "https://picsum.photos/1600/900",
        "1440x900": "https://picsum.photos/1440/900",
        "1280x800": "https://picsum.photos/1280/800"
    }

    response.send(mobileLinks, wideScreenLinks);
});







