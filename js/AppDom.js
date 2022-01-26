import Swipe from "swipejs";
/**
 *  IP ADDRESS TO BE CHANGED
 */
const IP = `192.168.1.239`;
export default class App {
  constructor() {
    this.isFullscreen = false;
    this.debug = document.getElementById("debug");
    this.handlers = {
      callback: this.onTransitionEnd.bind(this),
      open: this.onOpenWSConnection.bind(this),
      error: this.onWSError.bind(this),
      message: this.onWSMessage.bind(this),
    };
    window.mySwipe = new Swipe(document.getElementById("slider"), {
      stopPropagation: true,
      transitionEnd: this.handlers.callback,
    });
    this.checkWebsocketAvailibility();
    this.initListeners();
  }
  onTransitionEnd(index, elem, dir) {
    this.debug.innerHTML = `${index},${elem},${dir}`;
    this.connection.send(JSON.stringify({ project_id: index }));
  }
  checkWebsocketAvailibility() {
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    // si le navigateur n'accepte pas les websocket
    if (!window.WebSocket) {
      alert("Il faut utiliser un autre navigateur. Chrome par exemple.");
    } else {
      this.initConnection();
    }
  }
  initConnection() {
    this.connection = new WebSocket("ws://" + IP + ":1337");
    // on ouvre la connection
    this.connection.onopen = this.handlers.open;
    this.connection.onerror = this.handlers.error;
    this.connection.onmessage = this.handlers.message;
  }
  onOpenWSConnection(e) {
    console.log("::open connection::", e);
  }
  onWSError(error) {
    console("::error::", error);
  }
  onWSMessage(message) {
    console.log("::message::", message);
  }
  initListeners() {}
}
