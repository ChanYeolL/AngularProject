import {Component} from "@angular/core";

@Component({
  selector:'my-test',
  template:`
    <p>"<span [innerHTML]="title"></span>" is the <i>property bound</i> title.</p>
    <!--
  Angular generates warnings for these two lines as it sanitizes them
  WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).
 -->
    <p><span>"{{evilTitle}}" is the <i>interpolated</i> evil title.</span></p>
    <p>"<span [innerHTML]="evilTitle"></span>" is the <i>property bound</i> evil title.</p>
    <table border=1>
      <!--  expression calculates colspan=2 -->
      <tr>
        <td [attr.colspan]="1 + 1">One-Two</td>
      </tr>

      <!-- ERROR: There is no \`colspan\` property to set!
        <tr><td colspan="{{1 + 1}}">Three-Four</td></tr>
      -->

      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </table>
    <!-- create and set an aria attribute for assistive technology -->
    <button [attr.aria-label]="actionName">{{actionName}} with Aria</button>
    <!-- \`myClick\` is an event on the custom \`ClickDirective\` -->
    <div (myClick)="clickMessage=$event" clickable>click with myClick</div>

    <app-sizer [(size)]="fontSizePx"></app-sizer>
    <div [style.font-size.px]="fontSizePx">Resizable Text</div>
  `,
})

export class TestComponent{
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  fontSizePx = 16 ;
}
