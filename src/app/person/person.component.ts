import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {
  public name = "Dhiresh";
  public surname = "Gullapalli";
  constructor() {}

  ngOnInit() {}
}
