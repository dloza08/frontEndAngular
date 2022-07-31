import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Exp } from 'src/app/models/exp';
import { ExpService } from 'src/app/service/exp.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  exp: Exp = {
  id: Number = null,    
  exp_puesto: '',
  exp_descripcion:'',
  exp_sitio: '',
  exp_urllogo: '',
  //exp_comienzo: '',
  //exp_final : new Date(),
  }

  submitted = false;
  
  
  myForm:FormGroup;

  constructor(private fb:FormBuilder, 
    private expService:ExpService,
    private router:Router, private dialog: MatDialog
    ) {

     }

  ngOnInit(): void {
    
    this.myForm=this.fb.group({
    id: ['',],
    exp_puesto:['', [Validators.required, Validators.maxLength(200)]],
    exp_descripcion:['', [Validators.required, Validators.maxLength(400)]],
    exp_sitio:['', [Validators.required, Validators.maxLength(150)]],
    exp_urllogo:['', [Validators.required, Validators.maxLength(400)]], 
    //exp_comienzo: ['',],
    //exp_final: ['',],
    })  
  }


addExperiencia(): void {
    
  const data = this.myForm.value 
    
  this.expService.save(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        alert("Se agrego con Exito!!!");
        this.dialog.closeAll();
        window.location.reload();
      }, error: (e) => console.error(e)
       
    })
}

 public myError = (controlName: string, errorName: string) =>{
 return this.myForm.controls[controlName].hasError(errorName);

 }
}
