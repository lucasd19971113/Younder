import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IUserGet, UserStatus, IDetailedUserGet } from '../interfaces/get/IUserGet';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormsModule } from '@angular/forms';
import {ErrorStateMatcher, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { IUserServices } from '../interfaces/IUserServices';
import { UserService } from '../services/user-services.service';
import { ToastrService } from 'ngx-toastr';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/**
 * @title Table with pagination
 */
@Component({
  selector: 'user-table',
  styleUrls: ['user-table.scss'],
  templateUrl: 'user-table.html'
})
export class UserTableComponent  implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastname','birth', 'status', 'email', 'detalhes','idApagar'];
  dataSource = new MatTableDataSource<IUserGet>(ELEMENT_DATA);

  targetUser: any | IUserGet = null;

  userId: number;

  modalRef: BsModalRef;
    constructor(private toastr: ToastrService,private modalService: BsModalService, private _userClient: UserService<IUserGet>, private _userGetClient: UserService<IDetailedUserGet>) {}

    async openModal(template: TemplateRef<any>, userId: number = null) {

      if(userId !== null){
        this.userId = userId;
       await this.getUserById(userId);
      }
        this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
    }

    async getUserById(userId: number)
    {
      this._userGetClient.getById("api/user/get/"+userId)
        .then(res =>{

          if(res.status === 200){
            console.log(JSON.stringify(res.body));
            this.user = res.body as IDetailedUserGet;
          }
        }).catch(ex =>{
          console.log(JSON.stringify(ex))

          alert("Erro ao recuperar usuário");
        });
    }


    openModalDelete(template: TemplateRef<any>, user: IUserGet = null) {

      if(user !== null){
        this.targetUser = user;
      }

        this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
    }

    closeModal()
    {
      this.modalService.hide(1);

      this.fetchUsers();
    }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.fetchUsers();
  }

  async fetchUsers()
  {
    this._userClient.get("api/user/GetAllUsers")
    .then( u => {
      if(u.status === 200)
      {
        ELEMENT_DATA = u.body as IUserGet[];
        this.dataSource = new MatTableDataSource<IUserGet>(ELEMENT_DATA);

      }
    })
    .catch(ex =>
      {
        console.log(ex);

        alert("Erro ao realizar a busca de usuários");
      });
  }

  user: IDetailedUserGet = {} as IDetailedUserGet;



    Submit(ajsjal: any)
    {
       
    }

    async update()
    {
        
        this._userGetClient.update("api/user/UpdateUser", this.user)
        .then(res =>{
          if(res.status === 200)
          {
            alert("Usuário atualizado com sucesso");
          }
          console.log(JSON.stringify(res.body));
        })
        .catch(ex =>{
          console.log(JSON.stringify(ex));
          alert("Erro ao atualizar informações do usuário")
        });

        if(this.userId !== null && this.userId !== 0)
        {
          await this.getUserById(this.userId);
        }
        
        await this.fetchUsers();
    }

    async delete()
    {
        if(this.targetUser.id !== null)
        {
            this._userGetClient.delete("api/user/Delete/"+this.targetUser.id)
          .then(res =>{
            if(res.status === 200)
            {
              alert("Usuário removido com sucesso");
            }
            console.log(JSON.stringify(res.body));
          })
          .catch(ex =>{
            alert("Erro ao remover usuário da base de dados");
            console.log(JSON.stringify(ex));
          });
        }

        await this.fetchUsers();
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
  
    createdAtFormControl = new FormControl('', [
      Validators.required
    ]);
  
    modifiedAtFormControl = new FormControl('', [
      Validators.required
    ]);
  
    phoneFormControl = new FormControl('', [
      Validators.required
    ]);
  
    cpfFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(11)
    ]);
  
    genderFormControl = new FormControl('', [
      Validators.required
    ]);
  
    originFormControl = new FormControl('', [
      Validators.required
    ]);
  
  
    startDate = new Date(1990, 0, 1);
  
    endDate = new Date(2020,0,20);
  
    matcher = new MyErrorStateMatcher();
  
}

export interface PeriodicElement {
  nome: string;
  id: number;
  dataNascimento: number;
  sobrenome: string;
}

 var ELEMENT_DATA: IUserGet[] = [
  
];