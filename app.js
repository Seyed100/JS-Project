const LinkFile = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";
const downloadBtn = document.querySelector(".download-btn");

// Handler 
const timerInit = () => { 
    if (downloadBtn.classList.contains('disable-timer')) { 
        return location.href = LinkFile;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add('timer');
    downloadBtn.innerHTML = `دانلود فایل پس از <b>${timer}</b> شروع می شود `;
    const initCounter = setInterval(() => {
        if (timer > 0) { 
            timer--;
            return downloadBtn.innerHTML = `دانلود فایل پس از <b>${timer}</b> شروع می شود `;
        }
        clearInterval(initCounter);
        location.href = LinkFile;
        downloadBtn.innerText = 'در حال دانلود فایل ...'
        setTimeout(() =>  {
            downloadBtn.classList.replace('timer' , 'disable-timer');
            downloadBtn.innerHTML = `
            <span class="icon material-symbols-rounded">vertical_align_bottom</span>
            <span class="text">دانلود مجدد</span>
                `
        },3000 );
    } , 1000)
}

downloadBtn.addEventListener('click' , timerInit);