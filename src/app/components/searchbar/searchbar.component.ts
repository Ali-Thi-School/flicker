import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { flickrSearch } from 'src/app/flickrAPI';
import { Options, FilterValue, SizeValue, ColorValue, OrientationValue, SafeSearchValue } from 'src/app/modules/modules';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  
})

export class SearchBarComponent {
  isSearchBarAtTop: boolean = false;
  searchVal: string = '';
  isEmpty: boolean = false; // New property to track empty results

  @Output() searchData: EventEmitter<Array<{
    src: string;
    title: string;
    description: string;
    id: string;
  }>> = new EventEmitter();
  
  filters: Options = {};
  
  convertToColorValue(value: string): ColorValue {
    return ['red', 'green', 'blue', 'yellow', 'purple', 'white', 'black', 'gray'].includes(value) ? value as ColorValue : 'white';
  }

  setFilter(filterName: keyof Options, value: FilterValue) {
    switch(filterName) {
      case 'size':
        this.filters.size = value as SizeValue;
        break;
      case 'color':
        if (typeof value === 'string' && ['red', 'green', 'blue', 'yellow', 'purple', 'white', 'black', 'gray'].includes(value)) {
          this.filters.color = value as ColorValue;
        }
        break;
      case 'orientation':
        this.filters.orientation = value as OrientationValue;
        break;
      case 'safe_search':
        this.filters.safe_search = value as SafeSearchValue;
        break;
      case 'minDate':
      case 'maxDate':
        this.filters[filterName] = value as Date;
        break;
      default:
        throw new Error(`Invalid filter name: ${filterName}`);
    }
  }

  onSearch() {
    if (!this.searchVal.trim()) {
      this.isEmpty = false;
      this.searchData.emit([]);
      return;
    }

    flickrSearch(this.searchVal, this.filters)
      .then((res) => {
        if (res.length === 0) {
          this.isEmpty = true;
          setTimeout(() => {
            this.isEmpty = false;
          }, 2000);
        } else {
          this.isEmpty = false;
        }
        this.searchData.emit(res); // Emit the results
      })
      .catch((error) => {
        console.error('Error fetching search data:', error);
      });
  }

  toggleSearchBarPosition() {
    this.isSearchBarAtTop = !this.isSearchBarAtTop;
    console.log(this.searchVal);
    this.onSearch();
    const myOptions : Options  = {
      size: 'small',
      color: 'black',
      orientation: 'landscape',
      minDate: undefined,
      maxDate: undefined,
      safe_search : '1'
    };

    flickrSearch(this.searchVal, myOptions)
    .then((res) => {
      console.log('Received search data:', res);
     this.onSearch()
    })
    .catch((error) => {
      console.error('Error fetching search data:', error);
    }); 
  }

  // Menus functions 

  selectOrientation(orientation: any) {
    this.filters.orientation = orientation;
  }
  selectColor(color: any) {
    this.filters.color = color;
  }

  setSafeSearch(value: any) {
    this.filters.safe_search = value;
  }
}
