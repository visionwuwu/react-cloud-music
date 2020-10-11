import React, { lazy, Suspense } from 'react';
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const RecommendComponent = lazy(() => import("../application/Recommend"))
const SingersComponent = lazy(() => import("../application/Singers"))
const RankComponent = lazy(() => import("../application/Rank/index"))
const AlbumComponent = lazy(() => import("../application/Album/index"));

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/recommend"} />
          },
          {
            path: "/recommend",
            component: SuspenseComponent(RecommendComponent),
            routes: [
              {
                path: "/recommend/:id",
                component: SuspenseComponent(AlbumComponent)
              }
            ]
          },
          {
            path: "/singers",
            component: SuspenseComponent(SingersComponent)
          },
          {
            path: "/rank/",
            component: SuspenseComponent(RankComponent),
            key: "rank"
          }
        ]
      }
    ]
  }  
]