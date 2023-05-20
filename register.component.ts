import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControlName,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 openform=false;
 maxDate="2005-12-01";
 openform1=false;
 myGroup : FormGroup;
 
 
 customerData: any= [];
  constructor() { }

  ngOnInit(): void {
    this.myGroup= new FormGroup({
      'FirstName':new FormControl(null,Validators.required),
      'LastName':new FormControl(null,Validators.required),
      'DateofBirth':new FormControl(null,Validators.required),
      'Email':new FormControl(null,Validators.required),
      'MobileNumber':new FormControl(null,Validators.required),
      'IdProof':new FormControl(null,Validators.required),
      'IdNumber':new FormControl(null,Validators.required),
      'AddressLine1':new FormControl(null,Validators.required),
      'AddressLine2':new FormControl(null,Validators.required),
      'AddressLine3':new FormControl(null,Validators.required),
      'LandMark':new FormControl(null,Validators.required),
      'City':new FormControl(null,Validators.required),
      'State':new FormControl(null,Validators.required),
      
      'NomFirstName':new FormControl(null,Validators.required),
      'NomLastName':new FormControl(null,Validators.required),
      'NomDateofBirth':new FormControl(null,Validators.required),
      'NomEmail':new FormControl(null,Validators.required),
      'NomMobileNumber':new FormControl(null,Validators.required),
      'NomIdProof':new FormControl(null,Validators.required),
      'NomIdNumber':new FormControl(null,Validators.required),
      'NomAddressLine1':new FormControl(null,Validators.required),
      'NomAddressLine2':new FormControl(null,Validators.required),
      'NomAddressLine3':new FormControl(null,Validators.required),
      'NomLandMark':new FormControl(null,Validators.required),
      'NomCity':new FormControl(null,Validators.required),
      'NomState':new FormControl(null,Validators.required),

      'GuardFirstName':new FormControl(null,Validators.required),
      'GuardLastName':new FormControl(null,Validators.required),
      'GuardDateofBirth':new FormControl(null,Validators.required),
      'GuardEmail':new FormControl(null,Validators.required),
      'GuardMobileNumber':new FormControl(null,Validators.required),
      'GuardIdProof':new FormControl(null,Validators.required),
      'GuardIdNumber':new FormControl(null,Validators.required),
      'GuardAddressLine1':new FormControl(null,Validators.required),
      'GuardAddressLine2':new FormControl(null,Validators.required),
      'GuardAddressLine3':new FormControl(null,Validators.required),
      'GuardLandMark':new FormControl(null,Validators.required),
      'GuardCity':new FormControl(null,Validators.required),
      'GuardState':new FormControl(null,Validators.required),
    })
  }
  Dologin(){
    console.log(this.myGroup.value);
    this.customerData.push(this.myGroup.value);
    this.myGroup.reset();
  }
  get FirstNameCntrl(){
    return this.myGroup.get('FirstName');
  }
  get LastNameCntrl(){
    return this.myGroup.get('LastName');
  }
  get DateofBirthCntrl(){
    return this.myGroup.get('DateofBirth');
  }
  get EmailCntrl(){
    return this.myGroup.get('Email');
  }
  get MobileNumberCntrl(){
    return this.myGroup.get('MobileNumber');
  }
  get IdProofCntrl(){
    return this.myGroup.get('IdProof');
  }
  get IdNumberCntrl(){
    return this.myGroup.get('IdNumber');
  }
  get AddressLine1Cntrl(){
    return this.myGroup.get('AddressLine1');
  }
  get AddressLine2Cntrl(){
    return this.myGroup.get('AddressLine2');
  }
  get AddressLine3Cntrl(){
    return this.myGroup.get('AddressLine3');
  }
  get LandMarkCntrl(){
    return this.myGroup.get('LandMark');
  }
  get CityCntrl(){
    return this.myGroup.get('City');
  }
  get StateCntrl(){
    return this.myGroup.get('State');
  }
  
  
  get NomFirstNameCntrl(){
    return this.myGroup.get('NomFirstName');
  }
  get NomLastNameCntrl(){
    return this.myGroup.get('NomLastName');
  }
  get NomDateofBirthCntrl(){
    return this.myGroup.get('NomDateofBirth');
  }
  get NomEmailCntrl(){
    return this.myGroup.get('NomEmail');
  }
  get NomMobileNumberCntrl(){
    return this.myGroup.get('NomMobileNumber');
  }
  get NomIdProofCntrl(){
    return this.myGroup.get('NomIdProof');
  }
  get NomIdNumberCntrl(){
    return this.myGroup.get('NomIdNumber');
  }
  get NomAddressLine1Cntrl(){
    return this.myGroup.get('NomAddressLine1');
  }
  get NomAddressLine2Cntrl(){
    return this.myGroup.get('NomAddressLine2');
  }
  get NomAddressLine3Cntrl(){
    return this.myGroup.get('NomAddressLine3');
  }
  get NomLandMarkCntrl(){
    return this.myGroup.get('NomLandMark');
  }
  get NomCityCntrl(){
    return this.myGroup.get('NomCity');
  }
  get NomStateCntrl(){
    return this.myGroup.get('NomState');
  }


  get GuardFirstNameCntrl(){
    return this.myGroup.get('GuardFirstName');
  }
  get GuardLastNameCntrl(){
    return this.myGroup.get('GuardLastName');
  }
  get GuardEmailCntrl(){
    return this.myGroup.get('GuardEmail');
  }
  get GuardDateofBirth(){
    return this.myGroup.get('GuardDateofBirth');
  }
  get GuardMobileNumCntrl(){
    return this.myGroup.get('GuardMobileNumber');
  }
  get GuardIdProofCntrl(){
    return this.myGroup.get('GuardIdProof');
  }
  get GuardIdCntrl(){
    return this.myGroup.get('GuardIdNumber');
  }
  get GuardAddressLine1Cntrl(){
    return this.myGroup.get('GuardAddressLine1');
  }
  get GuardAddressLine2Cntrl(){
    return this.myGroup.get('GuardAddressLine2');
  }
  get GuardAddressLine3Cntrl(){
    return this.myGroup.get('GuardAddressLine3');
  }
  get GuardLandMarkCntrl(){
    return this.myGroup.get('GuardLandMark');
  }
  get GuardCityCntrl(){
    return this.myGroup.get('GuardCity');
  }
  get GuardStateCntrl(){
    return this.myGroup.get('GuardState');
  }
  

  
  onClickopenform(){
    this.openform=true;
  }
  onClickopenform1(){
    this.openform1=true;
  }

}
