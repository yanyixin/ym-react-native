//
//  CalendarManager.m
//  ymReactNative
//
//  Created by 闫萌 on 2017/11/7.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString)
{
  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
}

@end
