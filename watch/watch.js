
      setInterval(() => {
        d = new Date();
        //  s= `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        s = d.toLocaleString();
        //  console.log(s)
        hh = d.getHours();
        // document.write(hh)
        mh = d.getMinutes();
        sh = d.getSeconds();
        hrotate = hh * 30 + mh / 2;
        mrotate = mh * 6;
        srotate = sh * 6;
        hour.style.transform = `rotate(${hrotate}deg)`;

        minute.style.transform = `rotate(${mrotate}deg)`;

        second.style.transform = `rotate(${srotate}deg)`;

        document.querySelector("#digital").innerText = s;
      }, 1000);
