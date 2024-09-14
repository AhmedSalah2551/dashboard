import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesItemsComponent } from './files-items.component';

describe('FilesItemsComponent', () => {
  let component: FilesItemsComponent;
  let fixture: ComponentFixture<FilesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
