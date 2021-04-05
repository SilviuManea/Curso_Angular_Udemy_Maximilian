import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  userName = "";

  allowResetUser = false;

  onResetUser() {
    this.userName = "";
    this.allowResetUser = false;
  }

  checkInput($event) {
    console.log($event);
    // if (this.userName.length > 0) {
    //   this.allowResetUser = true;
    // } else {
    //   this.allowResetUser = false;
    // }
    this.allowResetUser = this.userName.length > 0;
  }
}
