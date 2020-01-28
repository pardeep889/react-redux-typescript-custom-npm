import React from 'react';

//COMPONENT
import { ToolTip } from '@components/index';
import DateCell from '@components/Calendar/DateCell';

const ToolTipPage = () => {
  return (
    <div>
      <h3 className="story-title">Tool Tip Types</h3>
      <div className="story-flex">
        <section>
          <h4 className="story-title">High Accent</h4>
          <div className="story-flex story-column">
            <div className="m50 ml100">
              <ToolTip type="high" title="Top Text" placement="top">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="high" title="Bottom Text" placement="bottom">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="high" title="Left Text" placement="left">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="high" title="Right Text" placement="right">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
          </div>
        </section>
        <section>
          <h4 className="story-title">Medium Accent</h4>
          <div className="story-flex story-column">
            <div className="m50 ml100">
              <ToolTip type="medium" title="Top Text" placement="top">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="medium" title="Bottom Text" placement="bottom">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="medium" title="Left Text" placement="left">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="medium" title="Right Text" placement="right">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
          </div>
        </section>
        <section>
          <h4 className="story-title">Low Accent</h4>
          <div className="story-flex story-column">
            <div className="m50 ml100">
              <ToolTip type="low" title="Top Text" placement="top">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="low" title="Bottom Text" placement="bottom">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="low" title="Left Text" placement="left">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
            <div className="m50 ml100">
              <ToolTip type="low" title="Right Text" placement="right">
                <DateCell day={6} discount/>
              </ToolTip>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ToolTipPage;