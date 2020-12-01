import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignByDomainComponent } from './design-by-domain.component';

describe('DesignByDomainComponent', () => {
  let component: DesignByDomainComponent;
  let fixture: ComponentFixture<DesignByDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignByDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignByDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
