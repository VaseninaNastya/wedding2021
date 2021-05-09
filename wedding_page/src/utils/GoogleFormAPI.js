class GoogleFormAPI {
  constructor() {
    this.API_SERVER =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZCRoWLBsYBjhJoA0YrhHkisPG8DKAULeMwGZFmMhJnrVahg";
    // this.API_SERVER = 'http://127.0.0.1:3003';
  }
  async sendResult(str) {
    return fetch(this.API_SERVER + "/formResponse?" + str, {
      method: "GET",
      headers: {
        "user-agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
      },
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
          console.log(error);
       return Error(error);
      });
  }
}
export default GoogleFormAPI;
