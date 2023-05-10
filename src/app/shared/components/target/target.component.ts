import { Component, Input, OnInit } from '@angular/core';
import { Target } from '../../models/entities/target.model';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
  @Input() target?: Target;

  constructor() { }

  ngOnInit(): void{
  }


}
