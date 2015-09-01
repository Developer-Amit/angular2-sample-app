// Type definitions for Angular v2.0.0-local_sha.77ccc1c
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************

// angular2/router depends transitively on these libraries.
// If you don't have them installed you can install them using TSD
// https://github.com/DefinitelyTyped/tsd

///<reference path="./angular2.d.ts"/>




/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
declare module ngRouter {

  /**
   * # Router
   * The router is responsible for mapping URLs to components.
   *
   * You can see the state of the router by inspecting the read-only field `router.navigating`.
   * This may be useful for showing a spinner, for instance.
   *
   * ## Concepts
   * Routers and component instances have a 1:1 correspondence.
   *
   * The router holds reference to a number of "outlets." An outlet is a placeholder that the
   * router dynamically fills in depending on the current URL.
   *
   * When the router navigates from a URL, it must first recognizes it and serialize it into an
   * `Instruction`.
   * The router uses the `RouteRegistry` to get an `Instruction`.
   */
  class Router {

     navigating: boolean;

     lastNavigationAttempt: string;

     registry: RouteRegistry;

     parent: Router;

     hostComponent: any;


    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
     childRouter(hostComponent: any): Router;


    /**
     * Register an object to notify of route changes. You probably don't need to use this unless
     * you're writing a reusable component.
     */
     registerOutlet(outlet: RouterOutlet): Promise<boolean>;


    /**
     * Dynamically update the routing configuration and trigger a navigation.
     *
     * # Usage
     *
     * ```
     * router.config([
     *   { 'path': '/', 'component': IndexComp },
     *   { 'path': '/user/:id', 'component': UserComp },
     * ]);
     * ```
     */
     config(definitions: List<RouteDefinition>): Promise<any>;


    /**
     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
     *
     * If the given URL begins with a `/`, router will navigate absolutely.
     * If the given URL does not begin with `/`, the router will navigate relative to this component.
     */
     navigate(url: string, _skipLocationChange?: boolean): Promise<any>;


    /**
     * Navigate via the provided instruction. Returns a promise that resolves when navigation is
     * complete.
     */
     navigateInstruction(instruction: Instruction, _skipLocationChange?: boolean): Promise<any>;


    /**
     * Updates this router and all descendant routers according to the given instruction
     */
     commit(instruction: Instruction, _skipLocationChange?: boolean): Promise<any>;


    /**
     * Subscribe to URL updates from the router
     */
     subscribe(onNext: (value: any) => void): Object;


    /**
     * Removes the contents of this router's outlet and all descendant outlets
     */
     deactivate(instruction: Instruction): Promise<any>;


    /**
     * Given a URL, returns an instruction representing the component graph
     */
     recognize(url: string): Promise<Instruction>;


    /**
     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
     * router has yet to successfully navigate.
     */
     renavigate(): Promise<any>;


    /**
     * Generate a URL from a component name and optional map of parameters. The URL is relative to the
     * app's base href.
     */
     generate(linkParams: List<any>): Instruction;
  }

  class RootRouter extends Router {

     commit(instruction: Instruction, _skipLocationChange?: boolean): Promise<any>;
  }


  /**
   * A router outlet is a placeholder that Angular dynamically fills based on the application's route.
   *
   * ## Use
   *
   * ```
   * <router-outlet></router-outlet>
   * ```
   */
  class RouterOutlet {

     childRouter: Router;

     name: string;


    /**
     * Given an instruction, update the contents of this outlet.
     */
     commit(instruction: Instruction): Promise<any>;


    /**
     * Called by Router during recognition phase
     */
     canDeactivate(nextInstruction: Instruction): Promise<boolean>;


    /**
     * Called by Router during recognition phase
     */
     canReuse(nextInstruction: Instruction): Promise<boolean>;

     deactivate(nextInstruction: Instruction): Promise<any>;
  }


  /**
   * The RouterLink directive lets you link to specific parts of your app.
   *
   * Consider the following route configuration:
   *
   * ```
   * @RouteConfig([
   *   { path: '/user', component: UserCmp, as: 'user' }
   * ]);
   * class MyComp {}
   * ```
   *
   * When linking to this `user` route, you can write:
   *
   * ```
   * <a [router-link]="['./user']">link to user component</a>
   * ```
   *
   * RouterLink expects the value to be an array of route names, followed by the params
   * for that level of routing. For instance `['/team', {teamId: 1}, 'user', {userId: 2}]`
   * means that we want to generate a link for the `team` route with params `{teamId: 1}`,
   * and with a child route `user` with params `{userId: 2}`.
   *
   * The first route name should be prepended with `/`, `./`, or `../`.
   * If the route begins with `/`, the router will look up the route from the root of the app.
   * If the route begins with `./`, the router will instead look in the current component's
   * children for the route. And if the route begins with `../`, the router will look at the
   * current component's parent.
   */
  class RouterLink {

     visibleHref: string;

     routeParams: any;

     onClick(): boolean;
  }

  class RouteParams {

     params: StringMap<string, string>;

     get(param: string): string;
  }


  /**
   * The RouteRegistry holds route configurations for each component in an Angular app.
   * It is responsible for creating Instructions from URLs, and generating URLs based on route and
   * parameters.
   */
  class RouteRegistry {


    /**
     * Given a component and a configuration object, add the route to this registry
     */
     config(parentComponent: any, config: RouteDefinition): void;


    /**
     * Reads the annotations of a component and configures the registry based on them
     */
     configFromComponent(component: any): void;


    /**
     * Given a URL and a parent component, return the most specific instruction for navigating
     * the application into the state specified by the url
     */
     recognize(url: string, parentComponent: any): Promise<Instruction>;


    /**
     * Given a normalized list with component names and params like: `['user', {id: 3 }]`
     * generates a url with a leading slash relative to the provided `parentComponent`.
     */
     generate(linkParams: List<any>, parentComponent: any): Instruction;
  }

  class LocationStrategy {

     path(): string;

     pushState(ctx: any, title: string, url: string): void;

     forward(): void;

     back(): void;

     onPopState(fn: (_: any) => any): void;

     getBaseHref(): string;
  }

  class HashLocationStrategy extends LocationStrategy {

     onPopState(fn: EventListener): void;

     getBaseHref(): string;

     path(): string;

     pushState(state: any, title: string, url: string): void;

     forward(): void;

     back(): void;
  }

  class PathLocationStrategy extends LocationStrategy {

     onPopState(fn: EventListener): void;

     getBaseHref(): string;

     path(): string;

     pushState(state: any, title: string, url: string): void;

     forward(): void;

     back(): void;
  }


  /**
   * This is the service that an application developer will directly interact with.
   *
   * Responsible for normalizing the URL against the application's base href.
   * A normalized URL is absolute from the URL host, includes the application's base href, and has no
   * trailing slash:
   * - `/my/app/user/123` is normalized
   * - `my/app/user/123` **is not** normalized
   * - `/my/app/user/123/` **is not** normalized
   */
  class Location {

     path(): string;

     normalize(url: string): string;

     normalizeAbsolutely(url: string): string;

     go(url: string): void;

     forward(): void;

     back(): void;

     subscribe(onNext: (value: any) => void, onThrow?: (exception: any) => void, onReturn?: () => void): void;
  }

  const APP_BASE_HREF : OpaqueToken ;


  /**
   * Responsible for performing each step of navigation.
   * "Steps" are conceptually similar to "middleware"
   */
  class Pipeline {

     steps: List<Function>;

     process(instruction: Instruction): Promise<any>;
  }


  /**
   * Defines route lifecycle method [onActivate], which is called by the router at the end of a
   * successful route navigation.
   *
   * For a single component's navigation, only one of either [onActivate] or [onReuse] will be called,
   * depending on the result of [canReuse].
   *
   * If `onActivate` returns a promise, the route change will wait until the promise settles to
   * instantiate and activate child components.
   *
   * ## Example
   * ```
   * @Directive({
   *   selector: 'my-cmp'
   * })
   * class MyCmp implements OnActivate {
   *   onActivate(next, prev) {
   *     this.log = 'Finished navigating from ' + prev.urlPath + ' to ' + next.urlPath;
   *   }
   * }
   *  ```
   */
  interface OnActivate {

     onActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
  }


  /**
   * Defines route lifecycle method [onDeactivate], which is called by the router before destroying
   * a component as part of a route change.
   *
   * If `onDeactivate` returns a promise, the route change will wait until the promise settles.
   *
   * ## Example
   * ```
   * @Directive({
   *   selector: 'my-cmp'
   * })
   * class MyCmp implements CanReuse, OnReuse {
   *   canReuse() {
   *     return true;
   *   }
   *
   *   onReuse(next, prev) {
   *     this.params = next.params;
   *   }
   * }
   *  ```
   */
  interface OnDeactivate {

     onDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
  }


  /**
   * Defines route lifecycle method [onReuse], which is called by the router at the end of a
   * successful route navigation when [canReuse] is implemented and returns or resolves to true.
   *
   * For a single component's navigation, only one of either [onActivate] or [onReuse] will be called,
   * depending on the result of [canReuse].
   *
   * ## Example
   * ```
   * @Directive({
   *   selector: 'my-cmp'
   * })
   * class MyCmp implements CanReuse, OnReuse {
   *   canReuse() {
   *     return true;
   *   }
   *
   *   onReuse(next, prev) {
   *     this.params = next.params;
   *   }
   * }
   *  ```
   */
  interface OnReuse {

     onReuse(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
  }


  /**
   * Defines route lifecycle method [canDeactivate], which is called by the router to determine
   * if a component can be removed as part of a navigation.
   *
   * If `canDeactivate` returns or resolves to `false`, the navigation is cancelled.
   *
   * If `canDeactivate` throws or rejects, the navigation is also cancelled.
   *
   * ## Example
   * ```
   * @Directive({
   *   selector: 'my-cmp'
   * })
   * class MyCmp implements CanDeactivate {
   *   canDeactivate(next, prev) {
   *     return askUserIfTheyAreSureTheyWantToQuit();
   *   }
   * }
   *  ```
   */
  interface CanDeactivate {

     canDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
  }


  /**
   * Defines route lifecycle method [canReuse], which is called by the router to determine whether a
   * component should be reused across routes, or whether to destroy and instantiate a new component.
   *
   * If `canReuse` returns or resolves to `true`, the component instance will be reused.
   *
   * If `canReuse` throws or rejects, the navigation will be cancelled.
   *
   * ## Example
   * ```
   * @Directive({
   *   selector: 'my-cmp'
   * })
   * class MyCmp implements CanReuse, OnReuse {
   *   canReuse(next, prev) {
   *     return next.params.id == prev.params.id;
   *   }
   *
   *   onReuse(next, prev) {
   *     this.id = next.params.id;
   *   }
   * }
   *  ```
   */
  interface CanReuse {

     canReuse(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
  }


  /**
   * Defines route lifecycle method [canActivate], which is called by the router to determine
   * if a component can be instantiated as part of a navigation.
   *
   * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
   * This is because [canActivate] is called before the component is instantiated.
   *
   * If `canActivate` returns or resolves to `false`, the navigation is cancelled.
   *
   * If `canActivate` throws or rejects, the navigation is also cancelled.
   *
   * ## Example
   * ```
   * @Directive({
   *   selector: 'control-panel-cmp'
   * })
   * @CanActivate(() => checkIfUserIsLoggedIn())
   * class ControlPanelCmp {
   *   // ...
   * }
   *  ```
   */
  var CanActivate : (hook: (next: ComponentInstruction, prev: ComponentInstruction) => Promise<boolean>| boolean) =>
        ClassDecorator ;


  /**
   * `Instruction` is a tree of `ComponentInstructions`, with all the information needed
   * to transition each component in the app to a given route, including all auxiliary routes.
   *
   * This is a public API.
   */
  class Instruction {

     component: ComponentInstruction;

     child: Instruction;

     auxInstruction: StringMap<string, Instruction>;

     replaceChild(child: Instruction): Instruction;
  }


  /**
   * A `ComponentInstruction` represents the route state for a single component. An `Instruction` is
   * composed of a tree of these `ComponentInstruction`s.
   *
   * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
   * to route lifecycle hooks, like {@link CanActivate}.
   */
  class ComponentInstruction {

     reuse: boolean;

     urlPath: string;

     urlParams: List<string>;

     params: StringMap<string, any>;

     componentType: any;

     resolveComponentType(): Promise<Type>;

     specificity: any;

     terminal: any;

     routeData(): Object;
  }

  class Url {

     path: string;

     child: Url;

     auxiliary: List<Url>;

     params: StringMap<string, any>;

     toString(): string;

     segmentToString(): string;
  }

  class OpaqueToken {

     toString(): string;
  }


  /**
   * Runtime representation of a type.
   *
   * In JavaScript a Type is a constructor function.
   */
  interface Type extends Function {

     new(args: any): any;

  }

  const ROUTE_DATA : OpaqueToken ;

  const ROUTER_DIRECTIVES : List<any> ;

  const ROUTER_BINDINGS : List<any> ;

  class Route implements RouteDefinition {

     data: any;

     path: string;

     component: Type;

     as: string;

     loader: Function;

     redirectTo: string;
  }

  class Redirect implements RouteDefinition {

     path: string;

     redirectTo: string;

     as: string;

     loader: Function;

     data: any;
  }

  class AuxRoute implements RouteDefinition {

     data: any;

     path: string;

     component: Type;

     as: string;

     loader: Function;

     redirectTo: string;
  }

  class AsyncRoute implements RouteDefinition {

     data: any;

     path: string;

     loader: Function;

     as: string;
  }

  interface RouteDefinition {

     path: string;

     component?: Type | ComponentDefinition;

     loader?: Function;

     redirectTo?: string;

     as?: string;

     data?: any;
  }

  var RouteConfig : (configs: List<RouteDefinition>) => ClassDecorator ;

  interface ComponentDefinition {

     type: string;

     loader?: Function;

     component?: Type;
  }

}

declare module "angular2/router" {
  export = ngRouter;
}
