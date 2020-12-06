import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() button?: string;
  @ViewChild('square') square!: ElementRef;

  @HostListener('window:keydown', ['$event'])
  showOutline(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      this.square.nativeElement.classList.add('square--tab-focus');
      this.square.nativeElement.classList.remove('square--hover-btn');
    }
  }

  @HostListener('mousedown', ['$event'])
  hideOutline(): void {
    this.square.nativeElement.classList.remove('square--tab-focus');
    this.square.nativeElement.classList.remove('square--hover-btn');
  }

  @HostListener('mouseover', ['$event'])
  growButton(): void {
    this.square.nativeElement.classList.add('square--hover-btn');
  }

  @HostListener('mouseout', ['$event'])
  shrinkBurron(): void {
    this.square.nativeElement.classList.remove('square--hover-btn');
  }
}
