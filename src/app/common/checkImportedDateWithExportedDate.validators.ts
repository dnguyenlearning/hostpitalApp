

import { AbstractControl, ValidationErrors } from "@angular/forms";

export function CheckImportedDate(control: AbstractControl): ValidationErrors|null {
   console.log(control);
    return null;
  }