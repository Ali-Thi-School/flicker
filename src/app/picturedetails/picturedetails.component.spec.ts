import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PictureDetailsComponent } from './picturedetails.component';

describe('PictureDetailsComponent', () => {
  let component: PictureDetailsComponent;
  let fixture: ComponentFixture<PictureDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureDetailsComponent]
    });
    fixture = TestBed.createComponent(PictureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
