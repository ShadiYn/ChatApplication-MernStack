import React from 'react'

const GenerCheckbox = () => {
  return (
    <div className="flex gap-4 items-center">
      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Male</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>

      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Female</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>

      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Other</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>
    </div>
  )
}

export default GenerCheckbox


/*
starter code for this file
import React from 'react'

const GenerCheckbox = () => {
  return (
    <div className="flex gap-4 items-center">
      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Male</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>

      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Female</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>

      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Other</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>
    </div>
  )
}

export default GenerCheckbox


*/ 