import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { map } from "rxjs/operators";
import { FormGroup } from '@angular/forms';
import { concat } from 'rxjs/internal/observable/concat';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-get-form',
  templateUrl: './get-form.component.html',
  styleUrls: ['./get-form.component.css']
})
export class GetFormComponent implements OnInit {
  data: any = null;
  form: FormGroup;
  constructor( private router: Router,private _http: Http) {
    this.form = new FormGroup({});
    //  this.getForm();
  }

  ngOnInit() {
      this.getForm();
  }

  private getForm() {
    var vm = this;
    
    return this._http.get("https://randomform.herokuapp.com/")
                  .pipe(map((res: Response) => res.json()))
                   .subscribe(data => {
                     this.data = data["data"];
                     console.log(this.data.form_fields);
                  },

                  (err)=>console.log(err),
                  ()=>console.log("Done")
                );
              }

  private submitForm() {
    console.log(this.data);

    var body = this.data;
    this._http.post("https://randomform.herokuapp.com/submit", JSON.stringify(body)).subscribe((data) => {
      if (data.ok) {
        alert("Form submitted successfully!")
      }
      else {
        alert("Form not submitted!")
      }
    });
    this.router.navigate(['/']);
  }
}
