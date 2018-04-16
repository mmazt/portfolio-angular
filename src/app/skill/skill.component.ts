import { Component, OnInit, Input } from "@angular/core";
import { PercentPipe } from "@angular/common";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.css"]
})
export class SkillComponent implements OnInit {
  @Input("percent") percent;
  @Input("image") image;
  @Input("legenda") legenda;
  public icon;
  public spacer;
  constructor() {}

  ngOnInit() {
    this.spacer = 100 - this.percent + "%";
    this.icon = "assets/images/icones/" + this.image + ".png";
    this.percent = this.percent + "%";
    this.legenda = "SKILLS.SKILL_" + this.legenda;
  }
}
