<img src="https://image.flaticon.com/icons/svg/3004/3004112.svg" width="150px" title="STAR RATING" alt="STAR">

# Ngx-star-rating

> Rating component for angular 8+ projects (ng9)

> Creative rating with mutiple color variance

# Preview demo

This preview was generated with [Stackblitz](https://stackblitz.com/edit/ngx-rating-star)
<img src="https://github.com/manoj10101996/ngx-star-rating/blob/master/star.png?raw=true" width="100%" title="STAR RATING" alt="STAR">


# Angular version

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Code integration

To use this package as a service `npm i ngx-rating-star` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-rating-star`   on root folder or else it will throw error.

## Import

Import the module on your `app.module.ts` file as follow.

> import { ngxRatingModule } from "ngx-rating-star";

Then import the module as follow on imports array

>ngxRatingModule

## Using

After importing this library with `ng build ng9-app-lib`, go to the component which is declared under `app.module.ts` and integrate as below.

> `<ngx-rating [star]="1" [shape]="'star' | 'multistar' | 'fill'"></ngx-rating>`

> star : (required) value shoule be `1-5`

> shape : (required) value shoule be `'star' | 'multistar' | 'fill'`

## Further help

To get more help on the usage  check out the [Ngx rating star README](https://github.com/manoj10101996/ngx-star-rating/blob/master/README.md).
