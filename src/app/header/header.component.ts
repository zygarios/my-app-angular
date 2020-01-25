import { Component, EventEmitter, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: []
})
export class HeaderComponent {
  @Output()
  featureSelected = new Subject<string>();

  constructor() {}

  onSelect(feature: string) {
    this.featureSelected.next(feature);
  }
}
