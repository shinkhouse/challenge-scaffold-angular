import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChorusesService } from 'src/app/core/services/choruses.service';

@Component({
  selector: 'app-add-chorus',
  templateUrl: './add-chorus.page.html',
  styleUrls: ['./add-chorus.page.scss'],
})
export class AddChorusPage implements OnInit {
  public editMode = false;
  public choirForm: FormGroup;
  public states = this.choirService.getUSStates();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private choirService: ChorusesService
  ) {
    this.choirForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip_code: ['', Validators.required],
      }),
      contact_email: ['', [Validators.required, Validators.email]],
      number_of_members: ['', [Validators.required, Validators.min(1)]],
      website: ['', Validators.required],
      social_media: this.fb.group({
        facebook: [''],
        twitter: [''],
        instagram: [''],
      }),
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.choirForm.valid) {
      this.choirService.addChorus(this.choirForm.value);
      this.router.navigate(['/choruses']);
    }
  }
}
