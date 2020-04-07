import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { IUserGet, UserStatus } from '../interfaces/get/IUserGet';
import {ErrorStateMatcher, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { UserService } from '../services/user-services.service';
import { IUserPost } from '../interfaces/post/IUserPost';
import { stringify } from 'querystring';
import { ToastrService } from 'ngx-toastr';





export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


/**
 * @title Inputs in a form
 */

@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    FormsModule
  ],
})

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss'],
})
export class UserFormComponent implements OnInit{

  constructor(private toastr: ToastrService,private _userClient: UserService<IUserPost>, private fb: FormBuilder){}
  ngOnInit(): void {
    // this.user.sexo = UserGender.masculino;

    // this.genderType = this.fb.group({
		// 	genderFormControl: [null, Validators.required]
    // });

    // var name = this.user.sexo == 1 ? 'Masculino' : 'Feminino';
    
    // const toSelect = this.genders.find(c => c == name);
    //   this.genderType.get('genderFormControl').setValue(toSelect);
  }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  lastNameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  dateOfBirthFormControl = new FormControl('', [
    Validators.required
  ]);

  // createdAtFormControl = new FormControl('', [
  //   Validators.required
  // ]);

  // modifiedAtFormControl = new FormControl('', [
  //   Validators.required
  // ]);

  phoneFormControl = new FormControl('', [
    Validators.required
  ]);

  cpfFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(11)
  ]);

  // genderFormControl = new FormControl('', [
  //   Validators.required
  // ]);

  originFormControl = new FormControl('', [
    Validators.required
  ]);

  genders: string[] = ['Masculino', 'Feminino']

  startDate = new Date(1990, 0, 1);

  endDate = new Date(2020,0,20);

  matcher = new MyErrorStateMatcher();

    user: IUserPost = {} as IUserPost;

    profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      });

    Submit(ajsjal: any)
    {
        alert(JSON.stringify(this.profileForm.value));
    }

    genderType: FormGroup;


    // getGenderValue()
    // {
    //   return this.user.sexo == 1 ? 'Masculino' : 'Feminino';
    // }

    // onChange(gender: string)
    // {
    //   if(gender.toLowerCase() === 'masculino')
    //   {
    //     this.user.sexo = UserGender.masculino;
    //   }
    //   else
    //   {
    //     this.user.sexo = UserGender.feminino;
    //   }
    // }

    clean()
    {
      this.user = {} as IUserPost
    }

    addUser()
    {
      
      this.user.createdAt = new Date();
      this.user.modifiedAt = new Date();
      this.user.status = UserStatus.Active;
        this._userClient.post("api/user/create", this.user)
        .then(res =>{
          if(res.status === 200)
          {
            alert("Usuário criado com sucesso!");
          }
        }).catch(ex =>{
          alert("Erro ao criar usuário");

          console.log(JSON.stringify(ex))
        });
      }
    
}