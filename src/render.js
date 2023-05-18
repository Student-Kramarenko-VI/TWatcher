const videoSelectBtn = document.getElementById("videoSelectBtn");
const { desktopCapturer } = require("electron");

videoSelectBtn.onclick = getVideoSources;

//Get the available video sources
async function getVideoSources()
{
    const inputSources = await desktopCapturer.getSources({
        types: ["window","screen"]
    });
    console.log(inputSources);

}
