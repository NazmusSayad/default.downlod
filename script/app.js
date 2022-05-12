let link = document.getElementById("link")

let blob = new Blob(["Hello, world!"], { type: "text/plain" })

link.href = URL.createObjectURL(blob)
