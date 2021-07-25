import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CadastrosService } from '../../cadastros.service';
import { CadastroEmail } from '../CadastroEmail';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  cadastroEmail: CadastroEmail;
  success: boolean = false;
  errors: string[];

  constructor(private service: CadastrosService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.cadastroEmail = new CadastroEmail();
  }

  ngOnInit(): void {
    this.cadastroEmail.endereco = '';
  }

  onSubmit() {
      this.service.salvarEmail(this.cadastroEmail).subscribe(resp => {
        this.success = true;
        this.errors = null;
        this.ngOnInit();
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
  }

}
