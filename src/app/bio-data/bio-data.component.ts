import { Component, OnInit } from "@angular/core";

@Component({
  selector: ".app-bio-data",
  template: `<div id="parent">
    I am a Programmer.
    <div id="border"></div>
  </div> `,
  styleUrls: ["./bio-data.component.scss"],
})
export class BioDataComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
