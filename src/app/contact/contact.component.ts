import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-contact]",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  public git = "https://github.com/dhiresh13";
  public fb = "https://www.facebook.com/dhiresh.gullapalli";
  public ln = "https://www.linkedin.com/in/dhiresh-gullapalli-0b6b28151/";

  constructor() {}

  ngOnInit() {}
}
