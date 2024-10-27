import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Choir } from 'src/app/core/models/chorus';
import { ChorusesService } from 'src/app/core/services/choruses.service';

@Component({
  selector: 'app-chorus-details',
  templateUrl: './chorus-details.page.html',
  styleUrls: ['./chorus-details.page.scss'],
})
export class ChorusDetailsPage implements OnInit {
  public editMode = false;
  public choir: Choir | null = null;
  public choirForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
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

    this.route.paramMap.subscribe((params) => {
      let chorusId = params.get('chorusId');
      if (!chorusId) {
        return;
      } else {
        this.choir = this.choirService.getChorusById(chorusId) ?? null;
        if (this.choir) {
          this.choirForm.patchValue(this.choir);
        }
      }
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.choir && this.choirForm.valid) {
      this.choirService.updateChorusById(this.choir.id, this.choirForm.value);
      this.editMode = false;
    }
  }

  onDelete() {
    if (this.choir) {
      this.choirService.deleteChorusById(this.choir.id);
      this.router.navigate(['/choruses']);
    }
  }
}