import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePokemonComponent } from './generate-pokemon.component';

describe('GeneratePokemonComponent', () => {
  let component: GeneratePokemonComponent;
  let fixture: ComponentFixture<GeneratePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
