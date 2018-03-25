import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../core/service/config.service';
import { ConstantService } from '../core/service/constant.service';
import { GeneratorService } from '../core/service/generator.service';
import { LocalStorageService } from '../core/service/local-storage.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  generated: string;

  constructor(public configService: ConfigService,
              public constantService: ConstantService,
              private generatorService: GeneratorService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.configService.login = 'My login';
    this.configService.email = 'My email';
    this.generated = this.generatorService.getRandom();
  }

}
