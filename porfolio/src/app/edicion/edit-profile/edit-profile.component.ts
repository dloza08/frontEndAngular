import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id:'';  
 
  profile: Profile = {
  id: Number = null,    
  hd_urlbanner: '',
  hd_urlperfil: '',
  hd_nombre: '',
  hd_apellido: '',
  hd_email: '',
  hd_ocupacion: '',
  hd_acerca: '',
    
  };
  
  submitted =false;   
  myForm:FormGroup;
  
  constructor(
    private fb:FormBuilder, 
    private profileService:ProfileService,
    private activatedRoute:ActivatedRoute,
    private router: Router, public dialog: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
  

  ngOnInit(): void {
    this.getID(this.data );
    this.myForm=this.fb.group({
     id: ['',],
     hd_urlbanner:['', [Validators.required, Validators.maxLength(400)]],
     hd_urlperfil: ['', [Validators.required, Validators.maxLength(400)]],
     hd_nombre:['', [Validators.required, Validators.maxLength(150)]],
     hd_apellido:['', [Validators.required, Validators.maxLength(255)]],
     hd_email: ['', [Validators.required, Validators.maxLength(200)]],
     hd_ocupacion: ['', [Validators.required, Validators.maxLength(255)]],
     hd_acerca: ['', [Validators.required, Validators.maxLength(500)]],
    })
 
  }

  getID(id:number):void{
    this.profileService.buscarID(id).subscribe(
      res => {
        
        this.myForm.patchValue(res);
                        
      }
    ) 
  }
  
  editarProfile(): void {
    
      const data = this.myForm.value 
        
      this.profileService.save(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
            alert("Se actualizo con Exito!!!");
            window.location.reload();
          }, error: (e) => console.error(e)
           
        })
  }
  


  public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
    }
}