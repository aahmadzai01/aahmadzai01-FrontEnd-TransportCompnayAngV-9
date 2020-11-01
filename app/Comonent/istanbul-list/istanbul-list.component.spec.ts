import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstanbulListComponent } from './istanbul-list.component';

describe('IstanbulListComponent', () => {
  let component: IstanbulListComponent;
  let fixture: ComponentFixture<IstanbulListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstanbulListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstanbulListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
