import Socket from "./Socket";

export default class IFrame {
  constructor() {
    console.log("iFrame is ok");
    this.handlers = {
      message: this.onMessage.bind(this),
    };
    this.socket = new Socket();
    this.socket.addEventListener("message", this.handlers.message);
  }
  onMessage(data) {
    const keys = Object.keys(data);
    keys.forEach((key) => {
      document.body.innerHTML += `${key}: ${data[key]}<br/>`;
    });
  }
}
